"use strict";

function handleLikePost(step) {
    let likeCount = 0;
    return function addLike() {
        likeCount += step;
        return likeCount;
    }
    console.log("like count:", likeCount);
}

const like = handleLikePost(1);
const doubleLike = handleLikePost(2);

console.log(like());
console.log(like());

console.log(doubleLike());
console.log(doubleLike());
