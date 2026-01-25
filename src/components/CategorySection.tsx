import { Link } from "react-router-dom";
import { categories } from "@/data/menuData";

const CategorySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Explore Our
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Menu Categories
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            From traditional Zambian dishes to international favorites, discover 
            our carefully crafted menu.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/menu?category=${category.id}`}
              className="card-elevated p-4 text-center group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
