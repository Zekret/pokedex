export const Title = ({ content, backgroundSelected }) => {
  return (
    <span style={{ color: backgroundSelected }} className="text-center font-bold text-xl">
        {content}
    </span>
  )
}
