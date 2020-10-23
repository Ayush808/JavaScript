var y = 1

if (function F() { }) {
    y += typeof F
}

console.log(y)

// Above is correct debuged code with output----->   1undefined