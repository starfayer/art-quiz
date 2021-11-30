import loadScore from "@/utils/loadScore";

const categories = ['Nature', 'Sadness', 'People', 'Portraits', 'Golden', 'Abstract', 
'Childhood', 'Forest', 'Glory', 'Home', 'Traditions', 'Foreign'];

const menuData = [
  {hash: '#pictures', data: []},
  {hash: '#artists', data: []}
]

menuData.forEach(preset => {
  categories.forEach(cat => {
    preset.data.push({
      category: cat,
      score: loadScore()
    })  
  })
})


export default menuData;