/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type ValidationDataStruct = {
  aggregator: PromiseOrValue<string>;
  validAfter: PromiseOrValue<BigNumberish>;
  validUntil: PromiseOrValue<BigNumberish>;
};

export type ValidationDataStructOutput = [string, number, number] & {
  aggregator: string;
  validAfter: number;
  validUntil: number;
};

export interface TestHelpersInterface extends utils.Interface {
  functions: {
    "intersectTimeRange(uint256,uint256)": FunctionFragment;
    "packValidationData(bool,uint48,uint48)": FunctionFragment;
    "packValidationDataStruct((address,uint48,uint48))": FunctionFragment;
    "parseValidationData(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "intersectTimeRange"
      | "packValidationData"
      | "packValidationDataStruct"
      | "parseValidationData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "intersectTimeRange",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "packValidationData",
    values: [
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "packValidationDataStruct",
    values: [ValidationDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "parseValidationData",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "intersectTimeRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "packValidationData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "packValidationDataStruct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseValidationData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TestHelpers extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestHelpersInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    intersectTimeRange(
      validationData: PromiseOrValue<BigNumberish>,
      paymasterValidationData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ValidationDataStructOutput]>;

    packValidationData(
      sigFailed: PromiseOrValue<boolean>,
      validUntil: PromiseOrValue<BigNumberish>,
      validAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    packValidationDataStruct(
      data: ValidationDataStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    parseValidationData(
      validationData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ValidationDataStructOutput]>;
  };

  intersectTimeRange(
    validationData: PromiseOrValue<BigNumberish>,
    paymasterValidationData: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ValidationDataStructOutput>;

  packValidationData(
    sigFailed: PromiseOrValue<boolean>,
    validUntil: PromiseOrValue<BigNumberish>,
    validAfter: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  packValidationDataStruct(
    data: ValidationDataStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  parseValidationData(
    validationData: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ValidationDataStructOutput>;

  callStatic: {
    intersectTimeRange(
      validationData: PromiseOrValue<BigNumberish>,
      paymasterValidationData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ValidationDataStructOutput>;

    packValidationData(
      sigFailed: PromiseOrValue<boolean>,
      validUntil: PromiseOrValue<BigNumberish>,
      validAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    packValidationDataStruct(
      data: ValidationDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseValidationData(
      validationData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ValidationDataStructOutput>;
  };

  filters: {};

  estimateGas: {
    intersectTimeRange(
      validationData: PromiseOrValue<BigNumberish>,
      paymasterValidationData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    packValidationData(
      sigFailed: PromiseOrValue<boolean>,
      validUntil: PromiseOrValue<BigNumberish>,
      validAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    packValidationDataStruct(
      data: ValidationDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseValidationData(
      validationData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    intersectTimeRange(
      validationData: PromiseOrValue<BigNumberish>,
      paymasterValidationData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    packValidationData(
      sigFailed: PromiseOrValue<boolean>,
      validUntil: PromiseOrValue<BigNumberish>,
      validAfter: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    packValidationDataStruct(
      data: ValidationDataStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseValidationData(
      validationData: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
