export {};

declare global {
  interface Window {
    changeIndustryCard: (
      element: HTMLElement,
      title: string,
      desc: string,
      imageUrl: string
    ) => void;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}