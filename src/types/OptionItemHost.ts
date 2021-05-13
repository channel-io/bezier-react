interface OptionItemHost<OptionKeyType = string> {
  selectedOptionIndex?: number
  onChangeOption?: (optionIndex: number, optionKey?: OptionKeyType) => void
}

export default OptionItemHost
