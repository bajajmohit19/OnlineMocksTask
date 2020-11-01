function attendClasses(arr, arr1) {
    let attend = []
    let j;
    for (let i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (i == 2) {
                console.log("important", arr1[i][1] == arr[j][1])
            }
            if (arr1[i][0] == arr[j][0] && arr1[i][1] == arr[j][1]) {
                break;
            }
            if (j == arr.length - 1) {
                attend.push(arr1[i])

            }

        }
    }
    console.log(attend)
}

// 2. question answer
function noOfEmp(empArr, m) {
    let listOfInvitees = []
    let conditionSum = 0
    let inviteeSum = 0
    for (let j = 0; j < empArr.length; j++) {

        if (j !== empArr[j][0]) {
            listOfInvitees.push(empArr[j])
        }
        if (j == m) {
            break;
        }
    }


}
// 3. Question Answer
function printParentheses(n) {
    if (n > 0) {
        Brackets(0, n, 0, 0)
    }

}
function Brackets(pos, n, open, close) {
    let str = ''
    if (close == n) {
        console.log(str)
        return
    }
    else {
        if (open > close) {
            str[pos] = ')'
            printParentheses(pos + 1, n, open, close + 1);
        }
        if (open < n) {
            str[pos] = '(';
            printParenthesis(pos + 1, n, open + 1, close);
        }
    }


}