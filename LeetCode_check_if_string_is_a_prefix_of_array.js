//Newer Appproach
//T(C(N)) and S(C(N))==O(1) as it requires const space alloc in const time
const isPrefixString=(r,t)=>{let n="";for(const e of t)if(n+=e,n==r)return!0;return!1};//Printing output for determinining the prefix of a string
//Older Appproach
//     let out=false;n=s.length;n1=words.length;
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n1;j++){
//             if(s[i]===words[j] && s.firstindex[j<n1]){
//                 s[j]+=words[j];
//                 out=true;
//     }  
//     else out=false;
//     }return out;
// };
