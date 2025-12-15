type InvestmentProps = {
    name: string;
    amount: number;
    currentPrice: number;
    initialPrice: number;
}
export const Investment = ({name, amount, currentPrice, initialPrice}: InvestmentProps) => {
    return (
        <div className="flex justify-between">
            <span>{name}</span>
            <div>{amount*currentPrice}</div>
        </div>
    );

}