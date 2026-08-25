import Button from "../components/Button";
import Card from "../components/Card";

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$45",
      popular: false,
      features: [
        "1,000 km included",
        "Basic insurance",
        "24/7 support",
        "Cancel anytime",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: "$95",
      popular: true,
      features: [
        "Unlimited km included",
        "Premium insurance",
        "24/7 support",
        "Cancel anytime",
        "GPS included",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "$149",
      popular: false,
      features: [
        "Unlimited km included",
        "Full coverage",
        "24/7 priority support",
        "Cancel anytime",
        "GPS + WiFi",
        "Luxury vehicles",
      ],
    },
  ];

  return (
    <section
      className="p-6 min-h-screen font-sans border-y border-indigo-500/20 flex flex-col items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true">
      <div className="text-center mb-6">
        <h2
          className="text-4xl font-bold text-indigo-100 my-6"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="100"
          data-aos-once="true">
          Pricing Plans
        </h2>
      </div>

      <div className="flex flex-row gap-8 p-4">
        {plans.map((plan, index) => (
          <Card
            key={plan.id}
            className={`flex justify-between items-center flex-col transition-all duration-300 hover:translate-y-[-8px] ${
              plan.popular
                ? "flex-[1.4] md:scale-105 border-indigo-500/40 bg-indigo-500/10 shadow-2xl shadow-indigo-500/20"
                : "flex-1"
            }`}
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay={200 + index * 150}
            data-aos-once="true">
            <div className="text-center w-full">
              {plan.popular && (
                <div className="text-sm rounded-full bg-indigo-500/20 border border-indigo-500/20 px-4 py-2 mb-2 text-indigo-400 font-semibold">
                  ★ Most Popular
                </div>
              )}
              <h3 className="font-bold text-4xl text-indigo-500">
                {plan.name}
              </h3>
              <p className="text-white/20 my-4">per day</p>
              <p className="text-4xl font-bold text-indigo-500 mx-2 my-4">
                {plan.price}
              </p>

              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center border-b border-b-indigo-500/20 p-4">
                    <span className="mx-4 my-2 text-indigo-500 font-bold text-2xl">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 w-full">
              <Button className="w-full font-semibold">Choose Plan</Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
