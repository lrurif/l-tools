/** 这些方法需要基于Element处理 */
/**
 * @function 处理表格单选操作
 * @param chosenData { Array } 所选数据，跨分页
 * @param row { Object } 当前操作表格行
 * @param key { String } 所要比较的键名
 */
 export const selectChangeSingleFunc = function(chosenData, row, key = "id") {
  for (let i = 0; i < chosenData.length; i++) {
      if (chosenData[i][key] == row[key]) {
          chosenData.splice(i, 1);
          return;
      }
  }
  chosenData.push(row);
};
/**
* @function 处理全选或全取消操作
* @param selection { Array } 当前表格所选数据
* @param tableData { Array} 当前表格数据
* @param chosenData {Array} 所选数据，跨分页
* @param key { String } 所要比较的键名
*/
export const selectAllDataFunc = function(
  selection,
  tableData,
  chosenData,
  key = "id"
) {
  // 取消全选，删除当前所选项中含有当前表格的数据
  if (selection.length == 0) {
      tableData.forEach(item => {
          for (let i = 0; i < chosenData.length; i++) {
              if (chosenData[i][key] == item[key]) {
                  chosenData.splice(i, 1);
                  return;
              }
          }
      });
  } else {
      tableData.forEach((item, index) => {
          let hasAdver = chosenData.some(cItem => cItem[key] == item[key]);
          if (!hasAdver) {
              chosenData.push(item);
          }
      });
  }
};
/**
* @function 处理所选择的数据和保存的数据的差异
* @param realChosenData { Array } 表单数据
* @param tempChosenData { Array } 所选数据,跨分页
* @param key { String } 所要比较的键名
*/
export const compareDataFunc = function(realChosenData, tempChosenData, key = "id") {
  // 清除未选择项
  for (let i = 0; i < realChosenData.length; i++) {
      if (!tempChosenData.some(item => item[key] == realChosenData[i][key])) {
          realChosenData.splice(i, 1);
          i--;
      }
  }
  // 加入选择项
  tempChosenData.map(item => {
      let hasExist = realChosenData.some(cItem => cItem[key] == item[key]);
      if (!hasExist) {
          realChosenData.push(item);
      }
  });
};
/**
* @function 处理回显数据
* @param tableRef {String} 表格实例
* @param tableData {Array}当前表格数据
* @param tempChosenData {Array}所选数据：跨分页
* @param key {String} 所要比较的键名
*/
export const handleEchoDataFunc = function(
  tableRef,
  tableData,
  tempChosenData,
  key = "id"
) {
  tableData.map(item => {
      if (tempChosenData.some(cItem => cItem[key] === item[key])) {
          tableRef.toggleRowSelection(item, true);
      }
  });
};
