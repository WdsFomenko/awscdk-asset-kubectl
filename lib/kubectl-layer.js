"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KubectlV29Layer = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const lambda = require("aws-cdk-lib/aws-lambda");
const _asset_1 = require("./_asset");
/**
 * A CDK Asset construct that contains `kubectl` and `helm`.
 */
class KubectlV29Layer extends lambda.LayerVersion {
    constructor(scope, id) {
        super(scope, id, {
            code: lambda.Code.fromAsset(_asset_1.ASSET_FILE, {
                assetHash: _asset_1.assetHash(),
            }),
            description: '/opt/kubectl/kubectl 1.29; /opt/helm/helm 3.14',
            license: 'Apache-2.0',
        });
    }
}
exports.KubectlV29Layer = KubectlV29Layer;
_a = JSII_RTTI_SYMBOL_1;
KubectlV29Layer[_a] = { fqn: "@aws-cdk/lambda-layer-kubectl-v29.KubectlV29Layer", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ViZWN0bC1sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9rdWJlY3RsLWxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaURBQWlEO0FBRWpELHFDQUFpRDtBQUVqRDs7R0FFRztBQUNILE1BQWEsZUFBZ0IsU0FBUSxNQUFNLENBQUMsWUFBWTtJQUN0RCxZQUFZLEtBQWdCLEVBQUUsRUFBVTtRQUN0QyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBVSxFQUFFO2dCQUN0QyxTQUFTLEVBQUUsa0JBQVMsRUFBRTthQUN2QixDQUFDO1lBQ0YsV0FBVyxFQUFFLGdEQUFnRDtZQUM3RCxPQUFPLEVBQUUsWUFBWTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOztBQVRILDBDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBhc3NldEhhc2gsIEFTU0VUX0ZJTEUgfSBmcm9tICcuL19hc3NldCc7XG5cbi8qKlxuICogQSBDREsgQXNzZXQgY29uc3RydWN0IHRoYXQgY29udGFpbnMgYGt1YmVjdGxgIGFuZCBgaGVsbWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBLdWJlY3RsVjI5TGF5ZXIgZXh0ZW5kcyBsYW1iZGEuTGF5ZXJWZXJzaW9uIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KEFTU0VUX0ZJTEUsIHtcbiAgICAgICAgYXNzZXRIYXNoOiBhc3NldEhhc2goKSxcbiAgICAgIH0pLFxuICAgICAgZGVzY3JpcHRpb246ICcvb3B0L2t1YmVjdGwva3ViZWN0bCAxLjI5OyAvb3B0L2hlbG0vaGVsbSAzLjE0JyxcbiAgICAgIGxpY2Vuc2U6ICdBcGFjaGUtMi4wJyxcbiAgICB9KTtcbiAgfVxufVxuIl19