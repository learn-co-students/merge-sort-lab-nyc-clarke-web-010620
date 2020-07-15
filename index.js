// takes two arrays breaks down each array and merge them 
// mergeSort([8, 2, 1, 0 , 15, 7, 3 , 21, 14, 6])
// merge([[8, 2, 1, 0 , 15],[7, 3 , 21, 14, 6])

function merge(arr1, arr2){
    let result = []
    let i = 0
    let j = 0 
    while(i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
        result.push(arr1[i])
        i++
      }else {
        result.push(arr2[j])
        j++
      }
    }
      while(i < arr1.length){
        result.push(arr1[i])
        i++
      }
      while(j < arr2.length){
        result.push(arr2[j])
        j++
      }
  
  
    return result
  }
  
  function mergeSort(array){
    if(array.length === 1){
      return array
    }
    let middle = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle))
    return merge(left, right)
  }

  function findMinAndRemoveSorted(array) {
    return array.shift()
    

  }