interface OptionItemHost<T = string> {
  selectedOptionIndex?: number
  onChangeOption?: (optionKey?: T, optionIndex?: number) => void
}

export default OptionItemHost
