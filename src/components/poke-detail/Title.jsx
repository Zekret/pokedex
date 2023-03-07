export const Title = ({ content, backgroundSelected }) => {
  return (
    <span style={{ margin: '1.5rem 0', color: backgroundSelected }} className="text-center font-bold text-xl">
        {content}
    </span>
  )
}
