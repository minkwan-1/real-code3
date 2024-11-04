import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async validateUser(profile: any) {
    const user = await this.userModel.findOne({ googleId: profile.id });
    if (user) {
      return user;
    } else {
      const newUser = new this.userModel({
        googleId: profile.id,
        username: profile.displayName,
        thumbnail: profile._json.picture,
      });
      return newUser.save();
    }
  }
}
