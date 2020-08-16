export function mapToPatientsNotCruise(otherData) {
  // console.log(otherData, 'otherData')
  // 検査陽性者の状況のデータ作成
  const 感染者数 = otherData.filter(d => d.KEY === '県内_感染者数')
  // const 退院者数 = otherData.filter(d => d.KEY === '県内_退院者数')
  const 死亡者数 = otherData.filter(d => d.KEY === '県内_死亡者数')
  // const 入院者数 = otherData.filter(d => d.KEY === '県内_入院者数')

  // グラフ表示用のデータ作成
  return {
    検査実施人数: 0,
    陽性者数: 感染者数 ? Number(感染者数[0].VALUE) : 0,
    入院中: '-',
    軽症中等症: '-',
    重症: '-',
    死亡: 死亡者数 ? Number(死亡者数[0].VALUE) : 0,
    退院: '-'
  }
}
