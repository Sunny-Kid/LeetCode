/**
 * 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。

给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。

示例 1:

输入: 
[[1,1,0],
 [1,1,0],
 [0,0,1]]
输出: 2 
说明：已知学生0和学生1互为朋友，他们在一个朋友圈。
第2个学生自己在一个朋友圈。所以返回2。
示例 2:

输入: 
[[1,1,0],
 [1,1,1],
 [0,1,1]]
输出: 1
说明：已知学生0和学生1互为朋友，学生1和学生2互为朋友，所以学生0和学生2也是朋友，所以他们三个在一个朋友圈，返回1。
注意：

N 在[1,200]的范围内。
对于所有学生，有M[i][i] = 1。
如果有M[i][j] = 1，则有M[j][i] = 1。
 */

/**
 * @param {number[][]} M
 * @return {number}
 */
// 方法1：DFS
var findCircleNum = function(M) {
  const visited = [];
  let count = 0;
  const n = M.length;
  for (let i = 0; i < n; i++) {
    visited.push(false);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, visited, M);
      count++;
    }
  }
  return count;
};

const dfs = function(i, visited, M) {
  for (let j = 0; j < visited.length; j++) {
    if (!visited[j] && M[i][j] === 1) {
      visited[j] = true;
      dfs(j, visited, M);
    }
  }
};

// 方法2：BFS
var findCircleNum = function(M) {
  const visited = [];
  const queue = [];
  let count = 0;
  const n = M.length;
  for (let i = 0; i < n; i++) {
    visited.push(false);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      queue.push(i);
      while (queue.length) {
        const s = queue.shift();
        visited[s] = true;
        for (let j = 0; j < n; j++) {
          if (M[s][j] === 1 && !visited[j]) {
            queue.push(j);
          }
        }
      }
      count++;
    }
  }
  return count;
};

// 方法2：并查集
var findCircleNum = function(M) {
  const parent = new Array(M.length).fill(-1);
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1 && i !== j) {
        union(parent, i, j);
      }
    }
  }
  let count = 0;
  for (let i = 0; i < parent.length; i++) {
    if (parent[i] === -1) count++;
  }
  return count;
};

function findParent(parent, i) {
  if (parent[i] === -1) {
    return i;
  }
  return findParent(parent, parent[i]);
}

function union(parent, i, j) {
  const iParent = findParent(parent, i);
  const jParent = findParent(parent, j);
  if (iParent !== jParent) parent[iParent] = jParent;
}
