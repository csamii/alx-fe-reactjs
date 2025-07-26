import { useRecipeStore } from "./recipeStore"

const RecommendationsList = () => {
    const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div>
        {recommendations.map(recommendation => (
            <div key={recommendation.id}>
                <h3>{recommendation.title}</h3>
                <p>{recommendation.description}</p>
            </div>
        ))}
    </div>
  )
}

export default RecommendationsList