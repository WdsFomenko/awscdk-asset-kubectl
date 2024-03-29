import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
/**
 * A CDK Asset construct that contains `kubectl` and `helm`.
 */
export declare class KubectlV29Layer extends lambda.LayerVersion {
    constructor(scope: Construct, id: string);
}
