import {
  Vault as GrpcNinjaVault,
  Profits as GrpcNinjaProfits,
  SubaccountBalance as GrpcNinjaSubaccountBalance,
  DenomBalance as GrpcNinjaDenomBalance,
  Pagination as GrpcNinjaPagination,
  PriceSnapshot as GrpcNinjaPriceSnapshot,
  Subscription as GrpcNinjaSubscription,
  Holders as GrpcNinjaHolders,
} from '@injectivelabs/ninja-api/goadesign_goagen_ninja_api_pb'

export enum NinjaRedemptionType {
  BaseOnly = 'BaseOnly',
  QuoteOnly = 'QuoteOnly',
  BaseAndQuote = 'BaseAndQuote',
}
export interface NinjaHolders {
  holderAddress: string
  vaultAddress: string
  amount: string
  updatedAt: number
  lpAmountPercentage: number
}

export interface NinjaPriceSnapshot {
  price: number
  updatedAt: number
}

export interface NinjaProfits {
  allTimeChange: number
  threeMonthsChange: number
  oneMonthChange: number
  oneDayChange: number
  oneWeekChange: number
  oneYearChange: number
  threeYearsChange: number
  sixMonthsChange: number
}

export interface NinjaDenomBalance {
  denom: string
  totalBalance: string
}

export interface NinjaSubaccountBalance {
  subaccountId: string
  balancesList: NinjaDenomBalance[]
}

export interface NinjaVault {
  contractAddress: string
  codeId: number
  vaultName: string
  marketId: string
  currentTvl: number
  profits?: NinjaProfits
  updatedAt: number
  vaultType: string
  lpTokenPrice: number
  subaccountInfo?: NinjaSubaccountBalance
  masterContractAddress: string
}

export interface NinjaSubscription {
  vaultInfo?: NinjaVault
  lpAmount: string
  lpAmountPercentage: number
  holderAddress: string
}

export interface NinjaPagination {
  total: Number
}

export interface NinjaPortfolio {
  totalValue: number
  pnl: number
  totalValueChartList: NinjaPriceSnapshot[]
  pnlChartList: NinjaPriceSnapshot[]
}

export {
  GrpcNinjaVault,
  GrpcNinjaProfits,
  GrpcNinjaSubaccountBalance,
  GrpcNinjaDenomBalance,
  GrpcNinjaPagination,
  GrpcNinjaPriceSnapshot,
  GrpcNinjaSubscription,
  GrpcNinjaHolders,
}