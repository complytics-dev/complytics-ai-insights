export const LogoBar = () => {
  const companies = [{
    name: "Salesforce",
    logo: "🏢"
  }, {
    name: "HubSpot",
    logo: "🎯"
  }, {
    name: "Workday",
    logo: "💼"
  }, {
    name: "Stripe",
    logo: "💳"
  }, {
    name: "Notion",
    logo: "📝"
  }, {
    name: "Linear",
    logo: "📐"
  }];
  
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by teams at leading companies
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">{company.logo}</span>
              <span className="font-medium">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};