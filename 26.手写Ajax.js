/**
 * @note 获取Ajax数据
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-22 10:43:10
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-22 11:02:12
 */

function ajax(url, method = "get", params) {
  return new Promise((reslove, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange(() => {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        reslove(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    });
    xhr.send(params);
  });
}
