export const LogoBar = () => {
  const companies = [
    { name: "Stripe", logo: "💳" },
    { name: "Notion", logo: "📝" },
    { name: "Slack", logo: "💬" },
    { name: "Figma", logo: "🎨" },
    { name: "Linear", logo: "📐" },
    { name: "Vercel", logo: "▲" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Trusted by leading SaaS companies worldwide
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {company.logo}
              </span>
              <span className="font-semibold text-lg">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};