export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="h-[100vh] w-full flex justify-center items-center">
            <div style={{ borderTopColor: "transparent" }}
                className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin">
            </div>
        </div>
    )
}