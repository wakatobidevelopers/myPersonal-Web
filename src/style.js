export const styles = {
  gradientColor:
    "from-green-400 to-blue-500",
  headTextStyle:
    `text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold md:text-lg text-[2.5rem] leading-45 font-secondary`,
  headTextColor:
    "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500",
  container:
    "grid grid-cols-1 gap-4 place-items-center max-w-md mx-auto md:my-100 my-20",
  section:
    "place-self-stretch mt-10 flex flex-col md:flex-row gap-6 items-center",
  flexItemCenter:
    "flex items-center",
  backgroundBlur:
    "backdrop-blur-sm bg-white/10",
  button:
    "flex items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-thin text-md p-3 text-center",
  
  navUnActiveClass: "block p-2 text-primary rounded hover:bg-white/10 md:hover:bg-transparent md:hover:text-thirdty md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",

  navActiveClass: "block rounded relative p-2 md:text-blue-500 text-white bg-green-400 md:bg-transparent md:after:block md:after:absolute md:after:-inset-1 md:after:h-1 md:after:bg-gradient-to-r md:after:from-green-400 md:after:to-blue-400 md:after:mt-15 md:p-0"
}