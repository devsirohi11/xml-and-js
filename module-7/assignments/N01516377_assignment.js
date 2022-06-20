const datas= [
  { born: 1870, died: 1924 },
  { born: 1893, died: 1976 },
  { born: 1869, died: 1948 },
  { born: 1901, died: 1989 },
];


const age = datas.map ((data) =>
{return data.died-data.born;
});

console.log(age);

const
filtered = age.filter ((age1) =>
{return  age1>75;
});

console.log(filtered);

const oldest = filtered.reduce((maxAge, age) => {
  if (age > maxAge) {
      maxAge = age;
  }
  return maxAge;
}, -1);

console.log(oldest);

const chainedData = datas
    .map((entry) => entry.died - entry.born)
    .filter((a) => a > 75)
    .reduce((max, age) => {
        if (age > max) {
            max = age;
        }
        return max;
    }, -1);

console.log(chainedData);


