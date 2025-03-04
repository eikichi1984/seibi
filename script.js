'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let groups = {
    1: ["谷口", "野田", "高阪", "三上", "佐藤"],
    2: ["阿知波", "梅月", "米澤", "舘", "戸塚"],
    3: ["平田", "浅井", "井村", "水田", "西野"],
    4: ["三宅", "金城", "山上", "服部", "大久保", "小松"]
};

function showRandomName() {
    const groupNumber = document.getElementById('groupSelect').value;
    let names = groups[groupNumber];
    if (names.length === 0) {
        document.getElementById('result').innerText = `組${groupNumber}: 全員が選ばれました！`;
        return;
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    document.getElementById('result').innerText = `組${groupNumber}: ランダムに選ばれた名前は: ${selectedName}`;
    names.splice(randomIndex, 1); // 選ばれた名前をリストから削除
}
