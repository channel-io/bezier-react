interface OptionItemHost {
  selectedOptionIndex?: number
  onChangeOption?: (optionKey?: string, optionIndex?: number) => void
}

export default OptionItemHost
