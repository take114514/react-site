export const Header = () => {
    const componentName = () =>"Header";

    return (
        // ここはHTMLではなくJSX（Javascript構文の拡張）
        <div className = "test-wrapper">
            このコンポーネントの名前は{componentName()}です。
        </div>
    );
};