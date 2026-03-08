import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu | Emily's Pizza",
  description: "Browse our menu - authentic wood-fired pizzas, Buffalo wings, garlic knots, and homemade pasta. Order online for pickup or delivery.",
};

const menuCategories = [
  {
    name: "Wood-Fired Pizzas",
    description: "Hand-tossed dough, wood-fired to perfection",
    items: [
      {
        name: "Classic Margherita",
        description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
        price: "$16.99",
        popular: true,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
      },
      {
        name: "Pepperoni Supreme",
        description: "Double pepperoni, mozzarella, marinara sauce",
        price: "$18.99",
        popular: true,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
      },
      {
        name: "Meat Lovers",
        description: "Pepperoni, Italian sausage, bacon, ham, ground beef",
        price: "$21.99",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop"
      },
      {
        name: "Veggie Delight",
        description: "Bell peppers, mushrooms, onions, olives, tomatoes",
        price: "$17.99",
        image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&h=300&fit=crop"
      },
      {
        name: "BBQ Chicken",
        description: "Grilled chicken, BBQ sauce, red onions, cilantro",
        price: "$19.99",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
      },
      {
        name: "White Pizza",
        description: "Ricotta, mozzarella, parmesan, garlic, olive oil (no sauce)",
        price: "$17.99",
        image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    name: "Appetizers",
    description: "Start your meal right",
    items: [
      {
        name: "Garlic Knots (6pc)",
        description: "Fresh baked, garlic butter, parmesan",
        price: "$6.99",
        popular: true,
        image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306b?w=400&h=300&fit=crop"
      },
      {
        name: "Buffalo Wings (10pc)",
        description: "Crispy wings, buffalo sauce, blue cheese dip, celery",
        price: "$12.99",
        popular: true,
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop"
      },
      {
        name: "Mozzarella Sticks (6pc)",
        description: "Golden fried, marinara dipping sauce",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&h=300&fit=crop"
      },
      {
        name: "Bruschetta",
        description: "Toasted bread, tomatoes, basil, garlic, balsamic glaze",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    name: "Pasta",
    description: "Homemade daily",
    items: [
      {
        name: "Spaghetti & Meatballs",
        description: "House-made meatballs, marinara, parmesan",
        price: "$16.99",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
      },
      {
        name: "Fettuccine Alfredo",
        description: "Creamy parmesan sauce, garlic, parsley",
        price: "$15.99",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop"
      },
      {
        name: "Penne Vodka",
        description: "Vodka cream sauce, prosciutto, parmesan",
        price: "$17.99",
        popular: true,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop"
      },
      {
        name: "Lasagna",
        description: "Layers of meat sauce, ricotta, mozzarella",
        price: "$18.99",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    name: "Beverages",
    description: "Refreshing drinks",
    items: [
      {
        name: "Soft Drinks",
        description: "Coke, Sprite, Diet Coke, Fanta",
        price: "$2.99",
        image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop"
      },
      {
        name: "Fresh Lemonade",
        description: "House-made, choice of classic or strawberry",
        price: "$3.99",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop"
      },
      {
        name: "Italian Soda",
        description: "Sparkling water, choice of flavor",
        price: "$3.49",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop"
      },
      {
        name: "Bottled Water",
        description: "Still or sparkling",
        price: "$1.99",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop"
      }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-red-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">Our Menu</h1>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Fresh ingredients, family recipes, wood-fired perfection. Everything made with love.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.name} className={categoryIndex > 0 ? "mt-16" : ""}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">{category.name}</h2>
                <div className="h-px flex-1 bg-zinc-200"></div>
                <p className="text-zinc-500 text-sm hidden sm:block">{category.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.name} 
                    className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                    style={{ animationDelay: `${itemIndex * 50}ms` }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {item.popular && (
                        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-zinc-900">{item.name}</h3>
                        <span className="text-primary font-bold whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-zinc-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">🌾</div>
              <h3 className="font-semibold text-zinc-900 mb-1">Gluten-Free Available</h3>
              <p className="text-zinc-500 text-sm">Ask about our gluten-free crust</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🥬</div>
              <h3 className="font-semibold text-zinc-900 mb-1">Vegetarian Options</h3>
              <p className="text-zinc-500 text-sm">Plenty of meat-free choices</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-semibold text-zinc-900 mb-1">Takeout & Delivery</h3>
              <p className="text-zinc-500 text-sm">Order online or call us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
