export function secondLargest(arr: number[]): number | string {
    let n = arr.length;
    if (n == 0) return 'No elements in array';
    if (n == 1) return 'Array does not have a second element';
  
    let first = -Infinity;
    let second = -Infinity;
  
    for (let i = 0; i < n; i++) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
      }
    }
  
    return second === -Infinity ? 'No second unique element' : second;
  }



export function palindromNumber(num: number): boolean {
    let n = num;
    let reversed = 0;

    while (n > 0) {
        let digit = n % 10;
        reversed = (reversed * 10) + digit;
        n = Math.floor(n / 10);
    }

    return num === reversed;
}

// console.log("zzzzzzzzzzzz",palindromNumber(313));

export function palindromString(s :string) : boolean{
    let palindrom = true;
   const val = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for(let i = 0 ; i < (val.length)/2 ; i ++){
        console.log(val[i] ,"============", val[(val.length - i) - 1]);
        if(val[i].toUpperCase() != val[(val.length - i) - 1 ].toUpperCase()){
            return false;
        }
    }

    return palindrom;

}

// console.log("zzzzzzzzzzzz",palindromString("A man a plan a canal Panama"));

export function rotateArray(arr: number[], r :number): number[]  {
    let rArr :number[] = [];

    for (let i = 0 ; i < arr.length ; i++){
        rArr[(r + i) % arr.length] = arr[i];
    }

    return rArr;
};

console.log(rotateArray([1,2,3,4,5],2));


