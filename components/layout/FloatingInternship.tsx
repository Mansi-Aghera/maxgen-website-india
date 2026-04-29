

"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import Swal from "sweetalert2";
import { API } from "@/lib/api";

interface Technology {
  id: number;
  title: string;
}

interface Props {
  onClose?: () => void;
}

export default function FloatingInternship({ onClose }: Props) {
  const [form, setForm] = useState({
  full_name: "",
  email: "",
  contact: "",
  address: "",
  city: "",
  career_internship: "" as string | number,
  career_internship_title: "",
  techonology: "",   // ✅ match backend typo
  resume: null as File | null,
});

  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [techLoading, setTechLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  // Fetch technology options on mount
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const res = await fetch(API.internshipList);
        const data = await res.json();
        setTechnologies(data.data || []);
      } catch (err) {
        console.error("Failed to fetch technologies:", err);
      } finally {
        setTechLoading(false);
      }
    };
    fetchTechnologies();
  }, []);

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: [] }));
  };

const handleTechnologyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedId = e.target.value;
  const selectedTech = technologies.find((t) => String(t.id) === selectedId);

  setForm((prev) => ({
    ...prev,
    career_internship: selectedId,
    career_internship_title: selectedTech?.title || "",
    techonology: selectedTech?.title || "",  // ✅ typo key
  }));
};
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
     const formData = new FormData();

formData.append("full_name", form.full_name);
formData.append("email", form.email);
formData.append("contact", form.contact);
formData.append("address", form.address);
formData.append("city", form.city);
formData.append("career_internship", String(form.career_internship));       // id
formData.append("career_internship_title", form.career_internship_title);   // title
formData.append("techonology", form.techonology);  // ✅ title string, NOT the id
if (form.resume) {
  formData.append("resume", form.resume);
}

// ✅ ADD HERE


const res = await fetch(API.internshipApply, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors || {});
        setLoading(false);
        Swal.fire({
  icon: "error",
  title: "Submission Failed!",
  text: Object.values(data.errors || {}).flat().join(", ") || "Please check the form.",
  confirmButtonColor: "#ef3b3a",
  customClass: { container: "swal-on-top" },  // ✅ add this
});
        return;
      }

      setLoading(false);
      setForm({
        full_name: "",
        email: "",
        contact: "",
        address: "",
        city: "",
        career_internship: "",
        career_internship_title: "",
        techonology: "",
        resume: null,
      });

     // Success
await Swal.fire({
  icon: "success",
  title: "Application Submitted!",
  text: "We will contact you soon.",
  confirmButtonColor: "#ef3b3a",
  customClass: { container: "swal-on-top" },  // ✅ add this
});

      onClose?.();
    } catch (err) {
      console.error(err);
      setLoading(false);
     Swal.fire({
  icon: "error",
  title: "Something went wrong!",
  text: "Please try again.",
  confirmButtonColor: "#ef3b3a",
  customClass: { container: "swal-on-top" },  // ✅ add this
});
    }
  };

  const fieldError = (name: string) =>
    errors[name]?.[0] && (
      <p className="text-xs text-red-500 mt-1">{errors[name][0]}</p>
    );

  return (
    <div className="px-6 sm:px-8 py-2 sm:py-4 relative">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center">
          🎒
        </div>
        <h2 className="text-xl font-semibold">Internship Application</h2>
      </div>

      <p className="text-sm text-muted mb-6">
        Please fill the form to apply for the internship.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>

        {/* Select Technology — fetched from API */}
        <div>
          <select
            value={String(form.career_internship)}
            onChange={handleTechnologyChange}
            className="w-full border rounded-md px-3 py-2"
            disabled={techLoading}
          >
            <option value="">
              {techLoading ? "Loading technologies..." : "Select Technology"}
            </option>
            {technologies.map((tech) => (
              <option key={tech.id} value={String(tech.id)}>
                {tech.title}
              </option>
            ))}
          </select>
          {fieldError("career_internship")}
        </div>

        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={form.full_name}
            onChange={(e) => handleChange("full_name", e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
          {fieldError("full_name")}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
          {fieldError("email")}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Contact Number"
            value={form.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
          {fieldError("contact")}
        </div>

        <div>
          <textarea
            placeholder="Address"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
          {fieldError("address")}
        </div>

        <div>
          <select
            value={form.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">City</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Pune">Pune</option>
            <option value="Navi Mumbai">Navi Mumbai</option>
          </select>
          {fieldError("city")}
        </div>

        <div>
          <div className="text-sm font-medium mb-1">Upload Resume</div>
          <input
            type="file"
            onChange={(e) =>
              handleChange("resume", e.target.files?.[0] || null)
            }
            className="w-full text-sm"
          />
          {fieldError("resume")}
        </div>

        <Button className="w-full" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}