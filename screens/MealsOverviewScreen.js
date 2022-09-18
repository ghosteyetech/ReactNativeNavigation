import { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  // Following hook also could use when in nested navigation even if it not registered as a screen
  //const routeNat = useRoute();
  //console.log("routeNat: ", routeNat.params.categoryId);

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // useEffect(() => { // Executed after the UI rendered
  useLayoutEffect(() => {
    // Execute simultaniously with function method is executing
    const categoryTitile = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitile,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
