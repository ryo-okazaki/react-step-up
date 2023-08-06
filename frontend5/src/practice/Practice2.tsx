export const Practice2 = () => {
    const getTotalFee = (num: number): number => {
        return num * 1.1
    }

    const onClickPractice = () => {
        getTotalFee(1000);
    }

    return (
        <div>
            <p>練習問題：返却値の型指定</p>
            <button onClick={onClickPractice}>練習問題2を実行</button>
        </div>
    )
}