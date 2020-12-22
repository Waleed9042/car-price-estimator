export const getEstimateCost = (
  series: string,
  color: string,
  type: string,
  postalCode: string
) => {
  if (series === "" || color === "" || type === "" || postalCode === "") {
    return;
  }
  let estimatedCost = 0;
  switch (type) {
    case "manual":
      switch (series) {
        case "C1":
          switch (color) {
            case "grey":
              estimatedCost = 900 + 100 + 100;
              break;
            case "dark":
              estimatedCost = 900 + 100 + 300;
              break;
            default:
              break;
          }
          break;
        case "C2":
          switch (color) {
            case "grey":
              estimatedCost = 1300 + 100 + 100;
              break;
            case "dark":
              estimatedCost = 1300 + 100 + 300;
              break;
            default:
              break;
          }
          break;
        case "C3":
          switch (color) {
            case "grey":
              estimatedCost = 1500 + 100 + 100;
              break;
            case "dark":
              estimatedCost = 1500 + 100 + 300;
              break;
            case "blue":
              estimatedCost = 1500 + 100 + 500;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    case "automatic":
      switch (series) {
        case "C1":
          switch (color) {
            case "grey":
              estimatedCost = 900 + 200 + 100;
              break;
            case "dark":
              estimatedCost = 900 + 200 + 300;
              break;
            default:
              break;
          }
          break;
        case "C2":
          switch (color) {
            case "grey":
              estimatedCost = 1300 + 200 + 100;
              break;
            case "dark":
              estimatedCost = 1300 + 200 + 300;
              break;
            default:
              break;
          }
          break;
        case "C3":
          switch (color) {
            case "grey":
              estimatedCost = 1500 + 200 + 100;
              break;
            case "dark":
              estimatedCost = 1500 + 200 + 300;
              break;
            case "blue":
              estimatedCost = 1500 + 200 + 500;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  if (postalCode && postalCode.indexOf("zz") === 0) {
    return estimatedCost;
  }
  return estimatedCost + 30;
};
