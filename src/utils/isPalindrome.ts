const isPalindrome = (value: string): boolean => {
    return value === value.split('').reverse().join('');
}

export {
    isPalindrome,
}