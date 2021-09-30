import marked from "marked";
export default function Previewer({ value }) {
  return (
    <div id="previewer">
      <h4>Space for previewing stuff</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(value),
        }}
      />
    </div>
  );
}
