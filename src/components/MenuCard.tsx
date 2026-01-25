import { Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuItem, formatPrice } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const { addItem, state } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = state.items.find((i) => i.menuItem.id === item.id);
  const quantityInCart = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addItem(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="card-elevated group p-4 flex flex-col h-full">
      {/* Popular Badge */}
      {item.popular && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full">
            ⭐ Popular
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Price & Action */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <span className="text-xl font-bold text-primary">
          {formatPrice(item.price)}
        </span>

        <div className="flex items-center gap-2">
          {quantityInCart > 0 && (
            <span className="text-sm text-muted-foreground">
              {quantityInCart} in cart
            </span>
          )}
          <Button
            size="sm"
            onClick={handleAddToCart}
            className={cn(
              "transition-all duration-300",
              justAdded
                ? "bg-green-600 hover:bg-green-700"
                : "btn-primary"
            )}
          >
            {justAdded ? (
              <Check className="h-4 w-4" />
            ) : (
              <>
                <Plus className="h-4 w-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
