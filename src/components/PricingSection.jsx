import { pricingPlans } from "../data/Pricing"
import PlanCard from "./PlanCard";
import TagLine from "./TagLine";


const PricingSection = () => {
  return (
    <section id="pricing"
    className="flex text-center p-10 items-center justify-center flex-col">
    <div className="flex text-center p-10 items-center justify-center flex-col">
        <TagLine>Pricing</TagLine>
        <h2 className="font-extrabold text-3xl mb-8 pt-3">Flexible pricing to Fit your Growth</h2>
        <div className="grid mt-10 items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {pricingPlans.map((plan,index) =>(
            <PlanCard key={index}
            price={plan.price}
            title={plan.title}
            description={plan.description}
            features={plan.features}
            isPopular={plan.isPopular}
            />

        ))}
        </div>
    </div>
    </section>
  )
}

export default PricingSection