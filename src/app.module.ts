import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './posts/posts.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    PostModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule {}
