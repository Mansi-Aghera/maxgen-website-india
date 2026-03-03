export {};

declare global {
  interface Window {
    changeIndustryCard: (
      element: HTMLElement,
      title: string,
      desc: string,
      imageUrl: string
    ) => void;
  }
}