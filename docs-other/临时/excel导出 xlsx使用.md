
```js
import { saveAs } from 'file-saver'
function excelDownloadSingle () {
  import('xlsx').then(xlsx => {
    function s2ab (s) {
      var buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
      return buf
    }

    const { utils } = xlsx
    const workBook = utils.book_new() // 创建一个工作簿

    // var first_sheet_name = workBook.SheetNames[0] // 获取工作簿中的工作表名字
    // var address_of_cell = 'A1' // 提供一个引用样式(单元格下标)

    // var worksheet = workBook.Sheets[first_sheet_name] // 获取对应的工作表对象

    // var desired_cell = worksheet[address_of_cell] // 获取对应的单元格对象

    // var desired_value = (desired_cell ? desired_cell.v : undefined)// 获取对应单元格中的数据

    const workSheet = utils.aoa_to_sheet(
      [
        [1, 2, 3, new Date()],
        [1, 2, null, 4]
      ], {
        sheetStubs: false,
        cellStyles: false,
        cellDates: true // 解析为原生时间
      }

    )

    workSheet['!merges'] = [
      // 设置A1-C1的单元格合并
      { s: { r: 0, c: 0 }, e: { r: 0, c: 2 }}
    ]
    // workSheet['!rows'] = [// 设置行高度
    //   { hpt: 50 }, // 序号
    //   { hpt: 150 }, // 发票抬头
    //   { hpt: 100 }, // 开票内容
    //   { hpt: 100 }// 发票金额

    // ]

    // const workSheet = utils.json_to_sheet([
    //   { '列1': 1, '列2': 2, '列3': 3 },
    //   { '列1': 4, '列2': 5, '列3': 6 }
    // ], {
    //   header: ['列1', '列2', '列3'],
    //   // skipHeader: true// 跳过上面的标题行
    // })

    // 向工作簿中追加工作表
    utils.book_append_sheet(workBook, workSheet, 'helloWorld')

    // 浏览器端和node共有的API,实际上node可以直接使用xlsx.writeFile来写入文件,但是浏览器没有该API
    const result = xlsx.write(workBook, {
      bookType: 'xlsx', // 输出的文件类型
      type: 'buffer', // 输出的数据类型
      compression: true // 开启zip压缩
    })

    saveAs(new Blob([s2ab(result)], {
      type: 'application/octet-stream'
    }), `test.xlsx`)
  })
}
```