#import "RCTAugmentifyModule.h"
#import <React/RCTLog.h>
#import <AugmentifySDK/AugmentifySDK.h>
#import "AppDelegate.h"

@implementation RCTAugmentifyModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(Augmentify);

RCT_EXPORT_METHOD(hasSupport:(RCTResponseSenderBlock) callback) {
  if(AugmentifySDKManager.shared.isSupported) {
          if(@available(iOS 12.0, *)) {
            callback(@[@(true)]);
          }
          else {
            callback(@[@(false)]);
          }
      }
}

RCT_EXPORT_METHOD(openExperience:(NSString *)experienceId) {
  [AugmentifySDKManager.shared configureWithAppToken:@"45bc175a0393f43545370245050188a4"
                                              secret:@"d03198ac585766c00d693fc4e122a3fb"];
  
  [[AugmentifySDKManager shared] start];
  
  NSString *stringUrl = [NSString stringWithFormat:@"augmentify45bc175a0393f43545370245050188a4://?experience_id=%@", experienceId];
  NSURL *url = [NSURL URLWithString:stringUrl];
  dispatch_async(dispatch_get_main_queue(), ^{
    AppDelegate *appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
    [appDelegate openAugmentifyView:url];
  });
}

@end
