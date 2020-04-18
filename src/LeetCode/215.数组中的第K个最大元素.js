/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 难度：中
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/** 部分排序，O(n * logn) 缺陷：如果有 1W 个数的话，只取第 3 个的话就会尴尬了 */
var findKthLargest = function(nums, k) {
  const sortedNums = nums.sort((a, b) => a - b);
  return sortedNums[k - 1];
};

/** 部分排序，给前 k 个数排序，直接用冒泡，O(n * k) */
var findKthLargest = function(nums, k) {
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums[nums.length - k];
};

/** 部分排序，利用最小堆, O(n * logk) */
var findKthLargest = function(nums, k) {
  let minHeap = new minHeap();
  for (let i = 0; i < nums.length; i++) {
    if (minHeap.size() < k) {
      minHeap.push(nums[i]);
    } else if (minHeap.top() < nums[i]) {
      minHeap.top();
      minHeap.push(nums[i]);
    }
  }
  return minHeap.top();
};

/** 部分排序，快排 + 二分搜索，O(n) */
var findKthLargest = function(nums, k) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = partition(nums, low, high);
    if (mid === k - 1) return nums[mid];
    mid < k - 1 ? (low = mid + 1) : (high = mid - 1);
  }
};

function partition(arr, low, high) {
  let mid = Math.floor(low + (high - low) / 2);
  const pivot = arr[mid];
  let i = low;
  let j = high - 1;
  // 把pivot放在arr的最后面
  [arr[mid], arr[high]] = [arr[high], arr[mid]];
  while (i <= j) {
    while (arr[i] > pivot) {
      i++;
    }
    while (arr[j] < pivot) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  // 因为arr[i]是属于left的,pivot也是属于left的
  // 故我们可以把原本保护起来的pivot和现在数组的中间值交换
  [arr[high], arr[i]] = [arr[i], arr[high]];
  return i;
}
