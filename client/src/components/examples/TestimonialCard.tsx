import TestimonialCard from "../TestimonialCard";
import testimonialImage from "@assets/generated_images/Female_CEO_headshot_c7fbc800.png";

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-md">
      <TestimonialCard
        quote="A Ivox Scale transformou completamente nossa estratégia de marketing. Em 6 meses, triplicamos nossa base de clientes e o ROI superou todas as expectativas."
        name="Maria Silva"
        role="CEO"
        company="TechCorp"
        image={testimonialImage}
      />
    </div>
  );
}
