import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';

export function useCounter () {
  const counterData = reactive({
    count: 0,
    title: 'My Counter'
  });
  
  const incrementCounter = () => {
    // counter.value++
    counterData.count++
  }
  const decrementCounter = () => {
    if (counterData.count > 0) {
      // counter.value--
      counterData.count--
    }
  }
  
  const incrementCounterPlusTwo = sum => {
    counterData.count +=sum;
  }
  
  // computed
  const oddOrEvent = computed(() => {
    return counterData.count % 2 == 0 ? 'even' : 'odd';
  });
  
  //* Watch
  watch(() => counterData.count, (newCounter, oldCounter) => {
    // newCounter == 10 ? alert('I love u') : '';
    console.log('newCounter', newCounter);
    console.log('oldCounter', oldCounter);
  })
  
  const appTitle = 'Ok my counter';
  const appTitleRef = ref(null);
  
  //* mounted
  onMounted(() => {
   
  });
  
  
  onUnmounted(() => {
    // When we change page or change tab will unmounted work 
    console.log('onUnmounted');
  });

  return {
    counterData,
    incrementCounter,
    decrementCounter,
    incrementCounterPlusTwo,
    oddOrEvent,
    appTitle
  }
}