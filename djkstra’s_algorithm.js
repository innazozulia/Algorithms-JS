const graph = {}
graph.a = {b: 2,c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {f: 1}
graph.g = {}

function shortPath(graph,start, end){
const costs = {}
const processed = []
let  neighbors = {}
Object.keys(graph).forEach(node => {
  if(node!== start){
    let value  = graph[start][node]
    costs[node] = value || 10000000
  }
})
console.log(costs)
let node = findNodeLowestCosts(costs, processed)
while(node){
const cost= costs[node]
neighbors = graph[node]
Object.keys(neighbors).forEach(neighbors => {
  let newCost = cost + neighbors[neighbors]
  if(newCost < cost[neighbors]){
    cost[neighbors] = newCost
  } 
})
processed.push(node)
node = findNodeLowestCosts(costs, processed)
}
return costs
}

function findNodeLowestCosts(costs, processed){
  let lowestCost = 1000000000
  let lowestNode;
  Object.keys(costs).forEach(node => {
    let cost = costs[node]
    if(cost < lowestCost && !processed.includes(node)){
      lowestCost = cost
      lowestNode = node
    }
  })
  return lowestNode
}
console.log(shortPath(graph, start = 'a', end = 'g'))
