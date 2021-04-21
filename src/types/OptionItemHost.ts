interface OptionItemHost<OptionKeyType = string> {
  selectedOptionIndex?: number
  onChangeOption?: (optionKey?: OptionKeyType, optionIndex?: number) => void
}

export default OptionItemHost
