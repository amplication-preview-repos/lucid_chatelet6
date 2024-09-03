/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AuthorService } from "../author.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AuthorCreateInput } from "./AuthorCreateInput";
import { Author } from "./Author";
import { AuthorFindManyArgs } from "./AuthorFindManyArgs";
import { AuthorWhereUniqueInput } from "./AuthorWhereUniqueInput";
import { AuthorUpdateInput } from "./AuthorUpdateInput";
import { AnalyticsFindManyArgs } from "../../analytics/base/AnalyticsFindManyArgs";
import { Analytics } from "../../analytics/base/Analytics";
import { AnalyticsWhereUniqueInput } from "../../analytics/base/AnalyticsWhereUniqueInput";
import { CourseFindManyArgs } from "../../course/base/CourseFindManyArgs";
import { Course } from "../../course/base/Course";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";
import { SubscriptionFindManyArgs } from "../../subscription/base/SubscriptionFindManyArgs";
import { Subscription } from "../../subscription/base/Subscription";
import { SubscriptionWhereUniqueInput } from "../../subscription/base/SubscriptionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AuthorControllerBase {
  constructor(
    protected readonly service: AuthorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Author })
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAuthor(@common.Body() data: AuthorCreateInput): Promise<Author> {
    return await this.service.createAuthor({
      data: data,
      select: {
        bio: true,
        createdAt: true,
        id: true,
        name: true,
        subdomain: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Author] })
  @ApiNestedQuery(AuthorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async authors(@common.Req() request: Request): Promise<Author[]> {
    const args = plainToClass(AuthorFindManyArgs, request.query);
    return this.service.authors({
      ...args,
      select: {
        bio: true,
        createdAt: true,
        id: true,
        name: true,
        subdomain: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async author(
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Author | null> {
    const result = await this.service.author({
      where: params,
      select: {
        bio: true,
        createdAt: true,
        id: true,
        name: true,
        subdomain: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAuthor(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() data: AuthorUpdateInput
  ): Promise<Author | null> {
    try {
      return await this.service.updateAuthor({
        where: params,
        data: data,
        select: {
          bio: true,
          createdAt: true,
          id: true,
          name: true,
          subdomain: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAuthor(
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Author | null> {
    try {
      return await this.service.deleteAuthor({
        where: params,
        select: {
          bio: true,
          createdAt: true,
          id: true,
          name: true,
          subdomain: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/analyticsItems")
  @ApiNestedQuery(AnalyticsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Analytics",
    action: "read",
    possession: "any",
  })
  async findAnalyticsItems(
    @common.Req() request: Request,
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Analytics[]> {
    const query = plainToClass(AnalyticsFindManyArgs, request.query);
    const results = await this.service.findAnalyticsItems(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        coursesSold: true,
        createdAt: true,
        id: true,
        lastSaleDate: true,
        subscribersCount: true,
        totalEarnings: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/analyticsItems")
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async connectAnalyticsItems(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: AnalyticsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analyticsItems: {
        connect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/analyticsItems")
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async updateAnalyticsItems(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: AnalyticsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analyticsItems: {
        set: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/analyticsItems")
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async disconnectAnalyticsItems(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: AnalyticsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analyticsItems: {
        disconnect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/courses")
  @ApiNestedQuery(CourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async findCourses(
    @common.Req() request: Request,
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Course[]> {
    const query = plainToClass(CourseFindManyArgs, request.query);
    const results = await this.service.findCourses(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/courses")
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async connectCourses(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        connect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/courses")
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async updateCourses(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        set: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/courses")
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async disconnectCourses(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        disconnect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/subscriptions")
  @ApiNestedQuery(SubscriptionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "any",
  })
  async findSubscriptions(
    @common.Req() request: Request,
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Subscription[]> {
    const query = plainToClass(SubscriptionFindManyArgs, request.query);
    const results = await this.service.findSubscriptions(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        status: true,

        subscriber: {
          select: {
            id: true,
          },
        },

        subscriptionDate: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/subscriptions")
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async connectSubscriptions(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: SubscriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptions: {
        connect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/subscriptions")
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async updateSubscriptions(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: SubscriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptions: {
        set: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/subscriptions")
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "update",
    possession: "any",
  })
  async disconnectSubscriptions(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: SubscriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptions: {
        disconnect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
