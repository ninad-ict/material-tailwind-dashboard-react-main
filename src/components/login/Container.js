export default function Container({ children }) {
    return (
        // <div className="absolute top-1/2 left-login transform -translate-x-1/2 -translate-y-1/2">
        <div className="mx-auto my-auto">
            <div className="max-w-sm w-96">{children}</div>
        </div>
    );
}
