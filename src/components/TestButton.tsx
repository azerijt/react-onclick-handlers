function TestButton(): JSX.Element {
  const handleClick = () => window.open("https://www.w3schools.com")
  return <button onClick={handleClick}>Make me do something when I'm clicked...</button>;
}

export default TestButton;
