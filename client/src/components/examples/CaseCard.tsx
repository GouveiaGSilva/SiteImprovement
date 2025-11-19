import CaseCard from "../CaseCard";
import caseImage from "@assets/generated_images/E-commerce_analytics_dashboard_af308884.png";

export default function CaseCardExample() {
  return (
    <div className="p-8 max-w-md">
      <CaseCard
        title="E-commerce de Moda"
        description="Transformação digital completa com foco em performance e conversão"
        image={caseImage}
        metrics={[
          { label: "Aumento de Vendas", value: "+320%" },
          { label: "ROI", value: "450%" },
        ]}
        tags={["E-commerce", "Tráfego Pago", "CRO"]}
        onClick={() => console.log("Case clicked")}
      />
    </div>
  );
}
